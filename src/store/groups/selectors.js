import { createSelector } from 'reselect'

const groupsMapSelector = state => state.groups.list;
const filterSelector = state => state.groups.filter;
const groupsIdsSelector = state => state.groups.ids;

export const groupByIdSelector = (state, id) => state.groups.list[id];

export const filteredGroupsIds = createSelector(
    groupsMapSelector,
    groupsIdsSelector,
    filterSelector,
    (groupsMap, groupsIds, filter) => filter ? groupsIds.filter(x =>
        groupsMap[x].name
            .toLowerCase()
            .includes(filter.toLowerCase())) : groupsIds
)
