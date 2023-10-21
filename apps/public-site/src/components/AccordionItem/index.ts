import { TypographySize, TypographyTag, createTypography } from "../Typography"


export interface AccordionItemProps {
    header?:string
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
    const headerText = header ? createTypography({label:header,size:TypographySize.bodyMedium,tag:TypographyTag.span}) : ""
    headerEl.append(headerText)
    headerEl.addEventListener("click",(event)=>{
        event.preventDefault()
        contentEl.classList.toggle("active")
        

    })


    accordionItemEl.append(headerEl,contentEl)



    return accordionItemEl

}