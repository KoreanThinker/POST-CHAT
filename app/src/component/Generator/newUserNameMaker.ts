import { userNameAdjective, userNameNouns } from '../values'

export default function (): string {
    const Adjective = userNameAdjective[Math.floor(Math.random() * userNameAdjective.length)]
    const Nouns = userNameNouns[Math.floor(Math.random() * userNameNouns.length)]
    const Number = Math.floor(Math.random() * 89) + 10

    return Adjective.charAt(0).toUpperCase() + Adjective.substring(1) + Nouns.charAt(0).toUpperCase() + Nouns.substring(1) + Number.toString()
}