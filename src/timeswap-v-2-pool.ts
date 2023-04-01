import {
  AddFees as AddFeesEvent,
  Burn as BurnEvent,
  CollectProtocolFees as CollectProtocolFeesEvent,
  CollectTransactionFee as CollectTransactionFeeEvent,
  Deleverage as DeleverageEvent,
  Leverage as LeverageEvent,
  Mint as MintEvent,
  Rebalance as RebalanceEvent,
  TransferFees as TransferFeesEvent,
  TransferLiquidity as TransferLiquidityEvent
} from "../generated/TimeswapV2Pool/TimeswapV2Pool"
import {
  AddFees,
  Burn,
  CollectProtocolFees,
  CollectTransactionFee,
  Deleverage,
  Leverage,
  Mint,
  Rebalance,
  TransferFees,
  TransferLiquidity
} from "../generated/poolSchema"

export function handleAddFees(event: AddFeesEvent): void {
  let entity = new AddFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.to = event.params.to
  entity.long0Fees = event.params.long0Fees
  entity.long1Fees = event.params.long1Fees
  entity.shortFees = event.params.shortFees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.long0To = event.params.long0To
  entity.long1To = event.params.long1To
  entity.shortTo = event.params.shortTo
  entity.liquidityAmount = event.params.liquidityAmount
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount
  entity.shortAmount = event.params.shortAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectProtocolFees(
  event: CollectProtocolFeesEvent
): void {
  let entity = new CollectProtocolFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.long0To = event.params.long0To
  entity.long1To = event.params.long1To
  entity.shortTo = event.params.shortTo
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount
  entity.shortAmount = event.params.shortAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectTransactionFee(
  event: CollectTransactionFeeEvent
): void {
  let entity = new CollectTransactionFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.long0To = event.params.long0To
  entity.long1To = event.params.long1To
  entity.shortTo = event.params.shortTo
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount
  entity.shortAmount = event.params.shortAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeleverage(event: DeleverageEvent): void {
  let entity = new Deleverage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.to = event.params.to
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount
  entity.shortAmount = event.params.shortAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLeverage(event: LeverageEvent): void {
  let entity = new Leverage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.long0To = event.params.long0To
  entity.long1To = event.params.long1To
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount
  entity.shortAmount = event.params.shortAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.to = event.params.to
  entity.liquidityAmount = event.params.liquidityAmount
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount
  entity.shortAmount = event.params.shortAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalance(event: RebalanceEvent): void {
  let entity = new Rebalance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.caller = event.params.caller
  entity.to = event.params.to
  entity.isLong0ToLong1 = event.params.isLong0ToLong1
  entity.long0Amount = event.params.long0Amount
  entity.long1Amount = event.params.long1Amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferFees(event: TransferFeesEvent): void {
  let entity = new TransferFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.from = event.params.from
  entity.to = event.params.to
  entity.long0Fees = event.params.long0Fees
  entity.long1Fees = event.params.long1Fees
  entity.shortFees = event.params.shortFees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferLiquidity(event: TransferLiquidityEvent): void {
  let entity = new TransferLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.from = event.params.from
  entity.to = event.params.to
  entity.liquidityAmount = event.params.liquidityAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
