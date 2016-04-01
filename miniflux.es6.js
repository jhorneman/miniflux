import EventEmitter from 'events';

const CHANGE_EVENT = 'STORE_CHANGE';

export function createStore(_storeSpec, _storeName) {
    return Object.assign({},
        EventEmitter.prototype, {
        storeName: _storeName || '<Unnamed store>',
        addChangeListener: function(callback) { this.addListener(CHANGE_EVENT, callback); },
        removeChangeListener: function(callback) { this.removeListener(CHANGE_EVENT, callback); }
    }, _storeSpec);
};

export function createStoreMutator(_store, _mutatorSpec) {
    return Object.assign({}, {
        store: _store,
        emitChange: function() { this.store.emit(CHANGE_EVENT); }
    }, _mutatorSpec);
};