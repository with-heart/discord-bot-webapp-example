import type {Awaitable, ClientEvents} from 'discord.js'

export interface EventListener<Name extends keyof ClientEvents> {
  (...args: ClientEvents[Name]): Awaitable<void>
}

/** Discord event definition. */
export interface Event<Name extends keyof ClientEvents> {
  /** The name of the event. */
  name: Name

  /**
   * Whether the event `listener` should handle the event only once or multiple
   * times.
   */
  once?: boolean

  /** Listener function triggered when the event occurs. */
  listener: EventListener<Name>
}
