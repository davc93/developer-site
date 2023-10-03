import { ArrowIcon } from "../Icons/ArrowIcon"
import { TypographySize, TypographyTag, createTypography } from "../Typography"

export interface AccordionItemProps {
    header:string
    content:HTMLElement
}




export const createAccordionItem = ({header,content}:AccordionItemProps) => {

    const accordionItemEl = document.createElement("div")
    accordionItemEl.className = "accordion-item"

    const contentEl = document.createElement("div")
    contentEl.className = "accordion-item__content"
    contentEl.append(content)

    const headerEl = document.createElement("button")
    headerEl.className = "accordion-item__header"
    const headerText = createTypography({label:header,size:TypographySize.bodyLarge,tag:TypographyTag.span})
    headerEl.append(headerText,ArrowIcon())
    headerEl.addEventListener("click",(event)=>{
        event.preventDefault()
        contentEl.classList.toggle("active")
        if(contentEl.style.height == "auto"){
            contentEl.style.height = "0"
        } else {
            contentEl.style.height = "auto"
        }
        

    })


    accordionItemEl.append(headerEl,contentEl)



    return accordionItemEl

}