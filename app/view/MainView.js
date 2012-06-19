/*
 * File: app/view/MainView.js
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

Ext.define('Payback.view.MainView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.MainView',

    requires: [
        'Payback.view.Summary',
        'Payback.view.Debts',
        'Payback.view.Prey'
    ],

    config: {
        items: [
            {
                xtype: 'Summary',
                itemId: 'Summary',
                title: 'Summary',
                iconCls: 'info'
            },
            {
                xtype: 'Debts',
                itemId: 'Debt',
                title: 'Debts',
                iconCls: 'arrow_down'
            },
            {
                xtype: 'Prey',
                itemId: 'Prey',
                title: 'Prey',
                iconCls: 'team'
            }
        ],
        tabBar: {
            docked: 'bottom',
            itemId: 'mytabbar'
        }
    },

    doTabChange: function(tabBar, newTab) {

        //this function overrides the default doTabChange to use routing logic instead.

        var oldActiveItem = this.getActiveItem(),
            newActiveItem;

        switch(tabBar.indexOf(newTab)) {
            case 0:
            location.hash ="summary";
            break;
            case 1:
            location.hash ="debt";
            break;
            case 2:
            location.hash ="prey";
            break;
        }

        newActiveItem = this.getActiveItem();
        return this.forcedChange || oldActiveItem !== newActiveItem;
    }

});