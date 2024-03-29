/*
 * File: app/model/Debt.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Payback.model.Debt', {
    extend: 'Ext.data.Model',
    alias: 'model.Debt',

    uses: [
        'Payback.model.Payment',
        'Payback.model.Person'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'auto'
            },
            {
                name: 'reason'
            },
            {
                name: 'amount'
            },
            {
                convert: function(v, rec) {
                    return rec.get('amount') - rec.payments().sum('amount');

                },
                name: 'balance'
            },
            {
                name: 'date',
                type: 'date'
            },
            {
                name: 'person_id'
            }
        ],
        hasMany: {
            model: 'Payback.model.Payment',
            autoLoad: true,
            foreignKey: 'debt_id',
            name: 'payments',
            store: {
                modelDefaults: null,
                remoteFilter: false
            }
        },
        proxy: {
            type: 'localstorage',
            id: 'Debts'
        },
        belongsTo: {
            model: 'Payback.model.Person',
            foreignKey: 'person_id'
        }
    }
});