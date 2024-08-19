import { useState } from "react"
import {
  Loggers,
  performTransaction as performTransactionInternal,
  PerformTransactionParameters,
  UpdateDuration,
} from "@plopmenz/viem-extensions"
import {
  type Abi,
  type Account,
  type Chain,
  type ContractFunctionArgs,
  type ContractFunctionName,
  type PublicClient,
  type RpcSchema,
  type Transport,
  type WalletClient,
} from "viem"
import {
  useChainId,
  usePublicClient,
  useSwitchChain,
  useWalletClient,
} from "wagmi"

import { ToastAction, ToastActionElement } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { chains } from "@/components/custom/web3-provider"

export interface usePerformTransactionProps {
  chainId?: number
}

export function usePerformTransaction(props: usePerformTransactionProps) {
  const connectedChainId = useChainId()
  const { switchChainAsync } = useSwitchChain()
  const { data: walletClient } = useWalletClient({ chainId: props.chainId })
  const publicClient = usePublicClient({ chainId: props.chainId })
  const { toast } = useToast()

  let dismiss = () => {}
  const loggers: Loggers = {
    onError: (item) => {
      console.error(`${item.title}: ${item.description}\n${item.error}`)
      dismiss()
      dismiss = toast({
        ...item,
        variant: "destructive",
      }).dismiss
    },
    onUpdate: (item) => {
      console.log(`${item.title}: ${item.description}`)
      dismiss()
      let action: ToastActionElement | undefined = undefined
      const update = item.updateType
      switch (update?.type) {
        case "ViewTransactionUpdate":
          action = (
            <ToastAction
              altText="View on explorer"
              onClick={() => {
                const chain = chains.find(
                  (c) => c.id === (props.chainId ?? connectedChainId)
                )
                if (!chain) {
                  return
                }

                window.open(
                  `${chain.blockExplorers.default.url}/tx/${update.transactionHash}`,
                  "_blank"
                )
              }}
            >
              View on explorer
            </ToastAction>
          )
          break
      }
      dismiss = toast({
        ...item,
        duration:
          item.updateDuration === UpdateDuration.Long ? 120_000 : undefined, // 2 minutes
        action: action,
      }).dismiss
    },
    onSuccess: (item) => {
      console.log(`${item.title}: ${item.description}`)
      dismiss()
      dismiss = toast({
        ...item,
        variant: "success",
      }).dismiss
    },
  }

  const [performingTransaction, setPerformingTransaction] =
    useState<boolean>(false)
  async function performTransaction<
    abi extends Abi | readonly unknown[] = Abi,
    functionName extends ContractFunctionName<
      abi,
      "nonpayable" | "payable"
    > = ContractFunctionName<abi, "nonpayable" | "payable">,
    args extends ContractFunctionArgs<
      abi,
      "nonpayable" | "payable",
      functionName
    > = ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>,
    chain extends Chain = Chain,
    account extends Account = Account,
    pcTransport extends Transport = Transport,
    pcAccountOrAddress extends Account | undefined = undefined,
    pcRpcSchema extends RpcSchema | undefined = undefined,
    wcTransport extends Transport = Transport,
    wcRpcSchema extends RpcSchema | undefined = undefined,
  >(
    params: PerformTransactionParameters<
      abi,
      functionName,
      args,
      chain,
      account,
      pcTransport,
      pcAccountOrAddress,
      pcRpcSchema,
      wcTransport,
      wcRpcSchema
    >
  ) {
    if (props.chainId !== undefined && connectedChainId !== props.chainId) {
      const switchChainResult = await switchChainAsync?.({
        chainId: props.chainId,
      }).catch((err) => {
        console.error(err)
      })
      if (!switchChainResult || switchChainResult.id !== props.chainId) {
        toast({
          title: "Wrong chain",
          description: `Please switch to ${chains.find((c) => c.id === props.chainId)?.name ?? props.chainId}.`,
          variant: "destructive",
        })
        return
      }
    }
    if (performingTransaction) {
      toast({
        title: "Please wait",
        description: "The past transaction is still running.",
        variant: "destructive",
      })
      return
    }
    setPerformingTransaction(true)
    await performTransactionInternal<
      abi,
      functionName,
      args,
      chain,
      account,
      pcTransport,
      pcAccountOrAddress,
      pcRpcSchema,
      wcTransport,
      wcRpcSchema
    >({
      loggers: loggers,
      publicClient: publicClient as PublicClient<
        pcTransport,
        chain,
        pcAccountOrAddress,
        pcRpcSchema
      >,
      walletClient: walletClient as any as WalletClient<
        wcTransport,
        chain,
        account,
        wcRpcSchema
      >,
      ...params,
    }).catch(console.error)
    setPerformingTransaction(false)
  }

  return { performTransaction, performingTransaction, dismiss, loggers }
}
