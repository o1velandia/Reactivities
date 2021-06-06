import { StrictRatingIconProps } from "semantic-ui-react";

export interface ServerError{
    statusCode: number;
    message:string;
    details:string;
}