/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cat } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatUpdateFormInputValues = {
    name?: string;
    color?: string;
    age?: string;
};
export declare type CatUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatUpdateFormOverridesProps = {
    CatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CatUpdateFormProps = React.PropsWithChildren<{
    overrides?: CatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cat?: Cat;
    onSubmit?: (fields: CatUpdateFormInputValues) => CatUpdateFormInputValues;
    onSuccess?: (fields: CatUpdateFormInputValues) => void;
    onError?: (fields: CatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CatUpdateFormInputValues) => CatUpdateFormInputValues;
    onValidate?: CatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CatUpdateForm(props: CatUpdateFormProps): React.ReactElement;
