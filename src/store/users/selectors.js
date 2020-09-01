export const filterUserIds = state => {
    const usersMap = state.users.list;
    const filter = state.users.filter;
    const filteredIds = filter ? state.users.ids.filter(x => usersMap[x].name.toLowerCase().includes(filter.toLowerCase())) : state.users.ids;
    
    return filteredIds;
}