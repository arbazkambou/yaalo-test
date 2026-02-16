import { AppDisPatch, RootState } from "@workspace/core/lib/redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDisPatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
