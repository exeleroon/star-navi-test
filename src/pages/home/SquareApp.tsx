import React, {useState} from 'react';
import Loader from "../../components/Loader";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Error from "../../components/Error";
import FlexContainer from "../../styled/components/FlexContainer";
import Button from "../../styled/components/Button";
import {squareAPI} from "../../service/SquareAppService";
import {squareSlice} from "../../store/reducers/SquareReducer";
import {SquareT, STd} from "./styled";
import Select from "../../components/Select";
import Logs from "./Logs";

const SquareApp = () => {
    const dispatch = useAppDispatch();

    const [isStart, setIsStart] = useState<boolean>(false);

    const {data: squareSettings, isLoading, error} = squareAPI.useFetchSquareSettingsQuery(null);

    const {tableMatrix, modeVariant, logs} = useAppSelector(state => state.squareReducer);

    const {setTableMatrix, doSquareHover, clearLogs} = squareSlice.actions;

    const moveMouse = (hoveredId: string) => {
        if (!isStart) {
            return;
        }
        dispatch(doSquareHover(hoveredId));
    }

    if (isLoading) {
        return (
            <Loader/>
        )
    }
    if (error) {
        return (
            <Error error={error}/>
        )
    }

    return (
        <FlexContainer gap={'50px'} min_height={'400px'} padding={'20px'}>
            <FlexContainer gap={'20px'} direction={'column'}>
                <FlexContainer padding={'10px'} gap={'20px'} mb={'20px'}>
                    <Select
                        name={'mode'}
                        placeholder={'Pick mode'}
                        onChange={e => {
                            dispatch(setTableMatrix(e.target.value))
                            dispatch(clearLogs());
                        }}
                        defaultValue={'pick'}
                        options={squareSettings}
                    />
                    <FlexContainer style={{position: 'relative'}} padding={'10px'} gap={'20px'} mb={'20px'}>
                        <Button title="Please select mode before starting app" onClick={_ => {
                            if (modeVariant === 'pick') {
                                return;
                            }
                            setIsStart(!isStart)
                        }}>
                            {isStart ? 'Stop' : 'Start'}</Button>
                    </FlexContainer>

                </FlexContainer>

                <FlexContainer max_height={'700px'} padding={'10px'}>
                    <SquareT>
                        <tbody>
                        {tableMatrix && tableMatrix.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map(cell => {
                                    return (
                                        <STd size={modeVariant > 20 ? 'large' : 'small'}
                                             onMouseEnter={() => moveMouse(cell.id)}
                                             started={isStart ? '1' : '0'}
                                             hovered={cell.hovered ? '1' : '0'} key={cell.id}
                                        >
                                        </STd>
                                    )
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </SquareT>
                </FlexContainer>
            </FlexContainer>

            <Logs logs={logs}/>
        </FlexContainer>
    );
};

export default SquareApp;