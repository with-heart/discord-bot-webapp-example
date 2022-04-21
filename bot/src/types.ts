import type {Awaitable, ClientEvents} from 'discord.js'

/** Discord event definition. */
export interface Event<Name extends keyof ClientEvents = keyof ClientEvents> {
  /** The name of the event. */
  name: Name

  /**
   * Whether the event `listener` should handle the event only once or multiple
   * times.
   */
  once?: boolean

  /** Listener function triggered when the event occurs. */
  listener: (...args: ClientEvents[Name]) => Awaitable<void>
}
