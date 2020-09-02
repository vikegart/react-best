export const filterGroupsIds = state => {
    const groupsMap = state.groups.list;
    const filter = state.groups.filter;
    const filteredIds = filter ? state.groups.ids.filter(x => groupsMap[x].name.toLowerCase().includes(filter.toLowerCase())) : state.groups.ids;
    
    return filteredIds;
}