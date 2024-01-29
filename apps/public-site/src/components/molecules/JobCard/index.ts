import { ImageFormat, createImage } from "../../atoms/Image";
import { createTypography,TypographySize,TypographyColor } from "../../atoms/Typography";

export interface JobCardProps{
    jobLogo:string;
    jobTitle:string;
    organization:string;
    from:string;
    to:string;
    description:string;
    jobUrl?:string;
}
export const createJobCard = ({jobTitle,organization,description,from,jobLogo,jobUrl}:JobCardProps) => {
    const container = document.createElement("div")
    container.addEventListener('click',()=>{
        open(jobUrl)
    })
    container.classList.add("job-card");
    const textContainer = document.createElement("div");
    const jobTitleEl = createTypography({
      label: jobTitle,
      size: TypographySize.bodyMedium,
      color: TypographyColor.Primary,
    });
    const organizationEl = createTypography({
      label: organization,
      size: TypographySize.bodyMedium,
      color: TypographyColor.White,
    });
    const fromUntilEl = createTypography({
      label: from,
      size: TypographySize.bodyMedium,
      color: TypographyColor.White,
    });
    textContainer.append(jobTitleEl, organizationEl, fromUntilEl);
    const imageEl = createImage({url:jobLogo,width:100,height:100,format:ImageFormat.PNG,isCloudinary:false});

    container.append(imageEl, textContainer);
    return container;
}