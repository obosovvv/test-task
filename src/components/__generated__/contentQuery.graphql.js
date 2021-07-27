/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type contentQueryVariables = {|
  page: number
|};
export type contentQueryResponse = {|
  +episodes: ?{|
    +info: ?{|
      +count: ?number,
      +pages: ?number,
      +next: ?number,
      +prev: ?number,
    |},
    +results: ?$ReadOnlyArray<?{|
      +name: ?string,
      +air_date: ?string,
      +characters: $ReadOnlyArray<?{|
        +name: ?string
      |}>,
      +episode: ?string,
      +id: ?string,
    |}>,
  |}
|};
export type contentQuery = {|
  variables: contentQueryVariables,
  response: contentQueryResponse,
|};
*/


/*
query contentQuery(
  $page: Int!
) {
  episodes(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      name
      air_date
      characters {
        name
        id
      }
      episode
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Info",
  "kind": "LinkedField",
  "name": "info",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pages",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "next",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "prev",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "air_date",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episode",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "contentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Episodes",
        "kind": "LinkedField",
        "name": "episodes",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Episode",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Character",
                "kind": "LinkedField",
                "name": "characters",
                "plural": true,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "contentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Episodes",
        "kind": "LinkedField",
        "name": "episodes",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Episode",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Character",
                "kind": "LinkedField",
                "name": "characters",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ac8f5c06adc83bad70444a9a4b5b1da8",
    "id": null,
    "metadata": {},
    "name": "contentQuery",
    "operationKind": "query",
    "text": "query contentQuery(\n  $page: Int!\n) {\n  episodes(page: $page) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      name\n      air_date\n      characters {\n        name\n        id\n      }\n      episode\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '80e620cb7b060b70f2532557e5e507f9';

module.exports = node;
