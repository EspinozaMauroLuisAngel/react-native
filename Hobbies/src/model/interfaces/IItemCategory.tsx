import React from "react";
import { Category } from "../classes/Category";

export interface IItemCategory {
    category:Category,
    handlerPress: (id?: string) => void
}