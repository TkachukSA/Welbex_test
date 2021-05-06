import React, {useEffect, useState} from 'react';
import './App.css';
import {mySqlAPI, ResponseTableType} from "./api/bd-api";
import {Table} from "./table/Table";


function App() {
    const [initialState, setInitialState] = useState<ResponseTableType[]>([])
    const [data, setData] = useState(initialState);

    const fetchData = async () => {
        try {
            const results = await mySqlAPI.getTable()
            setData(results.data)
            setInitialState(results.data)
        } catch (error) {
            console.log('error')
        }
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="App">
            {data && <Table table={data}
                            setData={setData}
                            initialState={initialState}/>
            }

        </div>
    );
}

export default App;
