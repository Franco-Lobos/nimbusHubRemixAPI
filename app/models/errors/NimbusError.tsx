export const enum NimbusErrorType {
    EXPIRED = 'EXPIRED',
    COOKIE = 'COOKIE',
    SERVER = 'SERVER',
    TOMORROW = 'TOMORROW',
    NOT_FOUND = 'NOT_FOUND',
    UNKNOWN = 'UNKNOWN',
}


export interface NimbusError{
    code: number,
    type: NimbusErrorType,
    message: string
}

export function isNimbusErrorr(obj: any): obj is NimbusError {
    return 'code' in obj && 'type' in obj && 'message' in obj;
}