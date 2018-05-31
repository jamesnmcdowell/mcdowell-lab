import { scrollTo } from 'react-static'

export const scrollToElement = () => {
    const element = document.getElementById('my-element')
    scrollTo(element)
}
