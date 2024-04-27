export interface MessageResponse {
    results: Result[];
    info:    Info;
}

export interface Info {
    page:    number;
    results: number;
}

export interface Result {
    id:           number;
    email:        string;
    organization: string;
    message:      string;
}
