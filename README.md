# Project Title

A wrapper for Knex Transaction for Objection ORM

## Getting Started:

CLS Hooked has been used to manage the knex transaction.

## Setup

To run this project, install it locally using npm :

### Example :

    const transaction = require('knex-transaction)

    function xyz() {
        return "async-objection-query"
    }

    module.exports = transaction(xyz)

#

To use transaction object in the models. simply use :

    Objection.Model.query(session.get('session').get('tx'))

Development is still on going. Looking for way around to inject transaction object directly in query builder within transaction layer.
