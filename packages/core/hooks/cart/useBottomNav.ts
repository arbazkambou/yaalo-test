import {
  useAppDispatch,
  useAppSelector,
} from "@workspace/core/lib/redux/hooks/hooks";
import { setShowBottomNav } from "@workspace/core/lib/redux/slices/bottomNavSlice";

export function useBottomNav() {
  const showBottomNav = useAppSelector(
    (state) => state.bottomNav.showBottomNav
  );

  const dispatch = useAppDispatch();

  function toggleBottomNave(value: boolean) {
    dispatch(setShowBottomNav(value));
  }

  return { showBottomNav, toggleBottomNave };
}
