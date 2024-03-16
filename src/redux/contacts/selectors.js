import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);