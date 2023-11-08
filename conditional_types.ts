type Circle = {
    radius: string
}

type Square = {
    width: number
}

type ColoredCircle = Circle & {
    color: 'red' | 'green' | 'blue'
}


type Bob = ColoredCircle extends Circle ? number : string;

// intérêt surtout quand on l'utilise avec des génériques
type Payload<T extends string | number> = {
    data: T
}

type StringPayload = Payload<string>


type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

type Email = {
    message: string;
}

type Dog = {
    bark(): void;
}

type EmailMessageContents = MessageOf<Email>;

type DogMessageContents = MessageOf<Dog>;
const dog: DogMessageContents = 3



// inferring with conditional types
// 
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
