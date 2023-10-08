export enum ImageFormat {
    WEBP = ".webp",
    JPG = ".jpg",
    PNG = ".png"
}

export interface ImageProps {
    url:string,
    width:number,
    height:number,
    format:ImageFormat
    quality?:number,
}


export const createImage = ({url,width,height,quality,format}:ImageProps) => {
        const imageEl = document.createElement("img")
        const qualityString = quality ? `,q_${quality}` : ""
        const config = `c_scale,h_${height},w_${width}${qualityString}`
        const lastIndex = url.lastIndexOf(".")
        const formatUrl = url.substring(0,lastIndex) + format
        
        const newUrl = `${formatUrl.replace("/image/upload/",`/image/upload/${config}/`)}`
        imageEl.src = newUrl
        return imageEl
}