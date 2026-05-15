import { Platform } from 'react-native'

import ExpoAudioStreamModule from './ExpoAudioStreamModule'

export interface PcmToWavOptions {
    fileUri: string
    sampleRate?: number
    channels?: number
    bitDepth?: number
    outputUri?: string
}

export async function pcmToWav(options: PcmToWavOptions): Promise<string> {
    if (!options.fileUri) {
        throw new Error('fileUri is required')
    }
    if (Platform.OS === 'web') {
        throw new Error('pcmToWav is not supported on web')
    }
    const result = await ExpoAudioStreamModule.pcmToWav({
        fileUri: options.fileUri,
        sampleRate: options.sampleRate ?? 16000,
        channels: options.channels ?? 1,
        bitDepth: options.bitDepth ?? 16,
        outputUri: options.outputUri,
    })
    return result as string
}
