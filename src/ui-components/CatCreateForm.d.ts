/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatCreateFormInputValues = {
    name?: string;
    color?: string;
    age?: string;
};
export declare type CatCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatCreateFormOverridesProps = {
    CatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CatCreateFormProps = React.PropsWithChildren<{
    overrides?: CatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CatCreateFormInputValues) => CatCreateFormInputValues;
    onSuccess?: (fields: CatCreateFormInputValues) => void;
    onError?: (fields: CatCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CatCreateFormInputValues) => CatCreateFormInputValues;
    onValidate?: CatCreateFormValidationValues;
} & React.CSSProperties>;
export default function CatCreateForm(props: CatCreateFormProps): React.ReactElement;
