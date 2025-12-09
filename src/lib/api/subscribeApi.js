import { baseApi } from "./baseApi";

export const subscribeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribeUser: builder.mutation({
      query: (payload) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Subscribe"],
    }),
    getAllSubscribers: builder.query({
      query: ({ page = 1, perPage = 10, sortField, sortOrder, search }) => ({
        url: "/newsletter",
        method: "GET",
        params: {
          page,
          perPage,
          sortField,
          sortOrder,
          search,
        },
      }),
      providesTags: ["Subscribe"],
    }),  
    deleteSubscriber: builder.mutation({
      query: (id) => ({
        url: `/newsletter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subscribe"],
    }),
  }),

  overrideExisting: false,
});


export const {
  useSubscribeUserMutation,
  useGetAllSubscribersQuery,
  useDeleteSubscriberMutation,
} = subscribeApi;
