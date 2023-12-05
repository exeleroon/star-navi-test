import React, {useEffect, useRef} from 'react';
import {SH2} from "../../styled/components/SH2";
import FlexContainer from "../../styled/components/FlexContainer";
import {SLog} from "./styled";
import {ILog} from "../../models/IMockApiData";

interface ILogs {
   logs: ILog[]
}

const Logs: React.FC<ILogs> = ({logs}) => {
    const logEndRef: React.RefObject<any> = useRef(null);

    useEffect(() => {
        scrollToBottom()
    }, [logs]);

    const scrollToBottom = (): void => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <FlexContainer gap={'15px'} direction={'column'} min_width={'190px'}>
            <SH2>Hover squares</SH2>

            <FlexContainer
                gap={'5px'}
                direction={'column'}
                max_height={'300px'}
                max_width={'300px'}
                justify={'flex-start'}
                width={'100%'}
            >
                {logs && logs.map(log =>
                    <SLog key={'log' + log.id}>{log.caption}</SLog>
                )}
                <div ref={logEndRef}/>
            </FlexContainer>
        </FlexContainer>
    );
};

export default Logs;