import {
  useAppDispatch,
  useAppSelector,
} from "@workspace/core/lib/redux/hooks/hooks";
import {
  clearPromoCodeData,
  PromoCodeData,
  setPromoCodeData,
} from "@workspace/core/lib/redux/slices/promoCodeSlice";

export function usePromoCodeActions() {
  const promoCodeData = useAppSelector((state) => state.promoCode.data);
  const dispath = useAppDispatch();

  function handleClearPromoCodeData() {
    dispath(clearPromoCodeData());
  }

  function handleSetPromoCodeData(promoCodeData: PromoCodeData) {
    dispath(setPromoCodeData(promoCodeData));
  }

  return { promoCodeData, handleClearPromoCodeData, handleSetPromoCodeData };
}
