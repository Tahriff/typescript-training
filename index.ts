
// keyof

//typeof

// indexed Access Type


// Generics example

type Payload = {
    data: any
}

// type Payload<T> = {
//     data: T
// }

// type StringPayload = Payload<string>

// type NumberPayload = Payload<number>

// generic function
const getFirstElement = (array: any[]) => {
    return array?.[0]
}

// const getFirstElement = <T>(array: T[]) => {
//     return array?.[0]
// }

const bob = getFirstElement(["tom"])

