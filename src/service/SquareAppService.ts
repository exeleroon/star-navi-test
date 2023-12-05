import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMockApiData} from "../models/IMockApiData";

export const squareAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://60816d9073292b0017cdd833.mockapi.io/'}),
    tagTypes: ['Square'],
    endpoints: (build) => ({
        fetchSquareSettings: build.query<IMockApiData[], any>({
            query: (params) => ({
                url: `/modes`,
                method: "GET"
            }),
            providesTags: result => ['Square']
        })
    })
})