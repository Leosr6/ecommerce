export interface IProductItem {
    ProductID: number;
    Name: string;
    Price: number;
    "Retail Price": number;
    ThumbnailURL: string;
    PictureURL: string;
    Description: string;
    Category: string;
    CategoryID: number;
    Brand: string;
    Color: string;
    Badges: string;
    RatingAvg: number;
    RatingCount: number;
    Stock: number;
    DateCreated: string;
}

export enum AlertStatus {
    Error = "error",
    Warning = "warning",
    Info = "info",
    Success = "success",
}
