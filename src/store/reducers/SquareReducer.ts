import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILog} from "../../models/IMockApiData";

interface ISquare {
    tableMatrix: any[];
    modeVariant: number | string;
    logs: ILog[],
    isLoading: boolean;
    error: string;
}

const initialState: ISquare = {
    tableMatrix: null,
    isLoading: false,
    modeVariant: 'pick',
    logs: [],
    error: null,
}

export const squareSlice = createSlice({
    name: 'square_slice',
    initialState,
    reducers: {
        setTableMatrix(state, action) {
            const objectMatrix = [];

            state.modeVariant = action.payload;

            for (let i = 0; i < action.payload; i++) {
                const row = [];
                for (let j = 0; j < action.payload; j++) {
                    const cell = {
                        id: i * action.payload + j,
                        hovered: false
                    };
                    row.push(cell);
                }
                objectMatrix.push(row);
            }
            state.tableMatrix = objectMatrix;
        },
        doSquareHover(state, action) {
            state.tableMatrix.some((line, rowIndex) => {
                let isFound = false;
                line.some((item, colIndex) => {
                    if (item.id === action.payload) {
                        isFound = true;
                        item.hovered = !item.hovered;

                        if (item.hovered) {
                            state.logs.push({
                                id: item.id,
                                caption: `row ${rowIndex + 1} col ${colIndex + 1}`
                            })
                        } else {
                            let removingIndex = null;
                            state.logs.some((log, index) => {
                                if (log.id === item.id) {
                                    removingIndex = index.toString();
                                    return true;
                                }
                                return false;
                            })
                            if (removingIndex) {
                                state.logs.splice(removingIndex, 1);
                            }
                        }
                        return true;
                    }
                    return false;
                })

                return isFound;
            })
        },
        clearLogs(state) {
            state.logs = [];
        }
    }
})

export default squareSlice.reducer;