import { watchFactory } from "./types/watchFactoryTypes";
import { timerWatch, watch } from "./types/watchTypes";

export class WatchFactory implements watchFactory {
    createTimer(): timerWatch {
        throw new Error("Method not implemented.");
    }
    createStopwatch(): watch {
        throw new Error("Method not implemented.");
    }
}
