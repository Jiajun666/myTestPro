import mitt from 'mitt'

const emitter = mitt()
export const eventBus = {
    on: emitter.on,
    emit: emitter.emit,
    off: emitter.off
}

export enum eventBusEnmu {
    list = 'list'
}