import { useEffect } from "react";
import cartIcon from "./assets/icons/cart_tower.svg";
import {
  armAudioOnce,
  attachAudioArmingListeners,
  triggerPurchaseOverlay,
} from "./effects/purchaseOverlay";
import "./App.css";

function App() {
  useEffect(() => {
    const detach = attachAudioArmingListeners();
    return () => detach?.();
  }, []);

  const handleBuy = () => {
    // Fire arming in the same gesture path; no await to keep iOS autoplay happy.
    void armAudioOnce();
    triggerPurchaseOverlay(true);
  };

  return (
    <main className="min-h-screen bg-black text-amber-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 px-6 py-12 text-center max-w-md">
        <img
          src={cartIcon}
          alt="Покупка"
          className="w-28 sm:w-36 md:w-44 brightness-0 invert -translate-y-4 sm:-translate-y-6"
        />

        <button
          type="button"
          onClick={handleBuy}
          className="px-10 py-4 text-2xl font-semibold tracking-wide text-black bg-white border border-white/20 rounded-3xl shadow-[0_10px_26px_rgba(255,255,255,0.14),0_20px_48px_rgba(255,255,255,0.17)] transition-all duration-150 ease-out hover:-translate-y-[1px] hover:shadow-[0_14px_34px_rgba(255,255,255,0.26),0_28px_64px_rgba(255,255,255,0.2)] active:translate-y-[1px] active:shadow-[0_8px_22px_rgba(255,255,255,0.2),0_18px_42px_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 animate-pulse-scale disabled:opacity-55 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed disabled:animate-none"
        >
          Покупаю!
        </button>
      </div>
    </main>
  );
}

export default App;
