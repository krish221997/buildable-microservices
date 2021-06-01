import create from "zustand";
import { devtools } from "zustand/middleware";
import initSetterModel from "./initSetterModal";

const useStore = create<any>(
    devtools((set, get) => ({
        ...initSetterModel(set, get, 'select', [])
    }))
);

export default useStore;