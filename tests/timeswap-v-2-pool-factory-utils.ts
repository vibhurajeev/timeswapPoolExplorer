import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AcceptOwner,
  Create,
  SetOwner
} from "../generated/TimeswapV2PoolFactory/TimeswapV2PoolFactory"

export function createAcceptOwnerEvent(owner: Address): AcceptOwner {
  let acceptOwnerEvent = changetype<AcceptOwner>(newMockEvent())

  acceptOwnerEvent.parameters = new Array()

  acceptOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return acceptOwnerEvent
}

export function createCreateEvent(
  caller: Address,
  option: Address,
  poolPair: Address
): Create {
  let createEvent = changetype<Create>(newMockEvent())

  createEvent.parameters = new Array()

  createEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  createEvent.parameters.push(
    new ethereum.EventParam("option", ethereum.Value.fromAddress(option))
  )
  createEvent.parameters.push(
    new ethereum.EventParam("poolPair", ethereum.Value.fromAddress(poolPair))
  )

  return createEvent
}

export function createSetOwnerEvent(pendingOwner: Address): SetOwner {
  let setOwnerEvent = changetype<SetOwner>(newMockEvent())

  setOwnerEvent.parameters = new Array()

  setOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return setOwnerEvent
}
