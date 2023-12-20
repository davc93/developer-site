import { ImageFormat, createImage } from "../../atoms/Image";
import { createTypography,TypographySize,TypographyColor } from "../../atoms/Typography";

export interface JobCardProps{
    title:string;
    organization:string;
    fromUntil:string;
    image:string;
    jobUrl:string;
}
export const createJobCard = ({title,organization,fromUntil,image,jobUrl}:JobCardProps) => {
    const container = document.createElement("div")
    container.addEventListener('click',()=>{
        open(jobUrl)
    })
    container.classList.add("job-card");
    const textContainer = document.createElement("div");
    const jobTitleEl = createTypography({
      label: title,
      size: TypographySize.bodyMedium,
      color: TypographyColor.Primary,
    });
    const organizationEl = createTypography({
      label: organization,
      size: TypographySize.bodyMedium,
      color: TypographyColor.White,
    });
    const fromUntilEl = createTypography({
      label: fromUntil,
      size: TypographySize.bodyMedium,
      color: TypographyColor.White,
    });
    textContainer.append(jobTitleEl, organizationEl, fromUntilEl);
    const imageEl = createImage({url:image,width:100,height:100,format:ImageFormat.PNG,isCloudinary:false});

    container.append(imageEl, textContainer);
    return container;
}