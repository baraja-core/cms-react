import { TypedUseSelectorHook, useSelector } from "react-redux";
import { brjReducer } from "./reducer";

export type State = ReturnType<typeof brjReducer>;

type BrjRootState = { brj: State };

export const brjSelector = (state: { brj: State }) => state.brj;

export const useBrjSelector: TypedUseSelectorHook<BrjRootState> = useSelector;
