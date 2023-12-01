/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // getstartedSidebar: [{type: 'autogenerated', dirName: '.'}],

  getstartedSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Choosing Hyperlane",
    },
    {
      type: "doc",
      id: "your-first-message",
      label: "Send your first message",
    },
    {
      type: "doc",
      id: "deploy-hyperlane",
      label: "Deploy Hyperlane to a new chain",
    },
    {
      type: "doc",
      id: "explorer",
      label: "Using the explorer",
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
  ],
  referenceSidebar: [
    {
      type: "category",
      label: "General Message Passing",
      link: {
        type: 'doc',
        id: 'reference/messaging/messaging-interface',
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/messaging/send",
          label: "Send a message",
        },
        {
          type: "doc",
          id: "reference/messaging/receive",
          label: "Receive a message",
        },
      ],
    },
    {
      type: "category",
      label: "Post-Dispatch Hooks",
      link: {
        type: 'doc',
        id: 'reference/hooks/overview',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/hooks/interchain-gas",
          label: "Interchain Gas",
        },
        {
          type: "doc",
          id: "reference/hooks/op-stack",
          label: "OP Stack",
        },
      ],
    },
    {
      type: "category",
      label: "Interchain Security Modules",
      link: {
        type: 'doc',
        id: 'reference/ISM/specify-your-ISM',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/ISM/multisig-ISM-interface",
          label: "Multisig",
        },
        {
          type: "doc",
          id: "reference/ISM/routing-ISM-interface",
          label: "Routing",
        },
        {
          type: "doc",
          id: "reference/ISM/aggregation-ISM-interface",
          label: "Aggregation",
        },
      ],
    },
    {
      type: "category",
      label: "Libraries",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/libraries/mailboxclient",
          label: "Mailbox Client",
        },
        {
          type: "doc",
          id: "reference/libraries/router",
          label: "Router",
        },
        {
          type: "doc",
          id: "reference/libraries/typecasts",
          label: "TypeCasts",
        },
        {
          type: "doc",
          id: "reference/libraries/message",
          label: "Message",
        },
        {
          type: "doc",
          id: "reference/libraries/hookmetadata",
          label: "Standard Hook Metadata",
        },
      ],
    },
    {
      type: "category",
      label: "Applications",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/applications/warp-routes",
          label: "Warp Routes",
        },
      ],
    },
    {
      type: "category",
      label: "Typescript SDK",
      link: {
        type: 'doc',
        id: 'reference/typescript-sdk/sdk-overview',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/typescript-sdk/multiprovider",
          label: "RPC Providers",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/deploying-contracts",
          label: "Deployment",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/testing-contracts",
          label: "Interchain Testing",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/quoting-gas",
          label: "Quoting Gas Payments",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/app-abstraction",
          label: "App Abstraction",
        },
      ],
    },
    {
      type: "doc",
      id: "reference/contract-addresses",
      label: "Addresses",
    },
    {
      type: "doc",
      id: "reference/domains",
      label: "Domains",
    },
    {
      type: "doc",
      id: "reference/glossary",
      label: "Glossary",
    },
  ],

  protocolSidebar: [
    {
      type: "doc",
      id: "protocol/protocol-overview",
      label: "Overview",
    },
    {
      type: "category",
      label: "Mailbox",
      link: {
        type: "doc",
        id: "protocol/mailbox",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "protocol/interchain-gas-payment",
          label: "Interchain Gas Payment",
        },
      ],
    },
    {
      type: "doc",
      id: "protocol/warp-routes",
      label: "Warp Routes",
    },
    {
      type: "category",
      label: "Interchain Security Modules",
      link: {
        type: "doc",
        id: "protocol/ISM/modular-security",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "protocol/ISM/multisig-ISM",
          label: "Multisig ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/routing-ISM",
          label: "Routing ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/aggregation-ISM",
          label: "Aggregation ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/ccip-read-ISM",
          label: "CCIP-Read ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/optimistic-ISM",
          label: "Optimistic ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/wormhole-ISM",
          label: "Wormhole ISM",
        },
        
      ],
    },
    {
      type: "category",
      label: "Agents",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "protocol/agents/validators",
          label: "Validators",
        },
        {
          type: "doc",
          id: "protocol/agents/relayer",
          label: "Relayer",
        },
        {
          type: "doc",
          id: "protocol/agents/watchtowers",
          label: "Watchtowers",
        },
      ],
    },
    {
      type: "doc",
      id: "protocol/economic-security",
      label: "Economic Security",
    },
    {
      type: "doc",
      id: "protocol/implementation-guide",
      label: "Implementation Guide",
    },
  ],

  guidesSidebar: [
    {
      type: "doc",
      id: "guides/v2-to-v3-migration",
      label: "v2 to v3 Migration",
    },
    /*
    {
      type: "category",
      label: "Deploy Warp Route",
      link: {
        type: 'doc',
        id: 'guides/deploy-warp-route',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/deploy-warp-route-UI",
          label: "Deploy a Warp Route UI",
        },
      ],
    },
    */
    {
      type: "doc",
      id: "guides/create-your-own-ISM",
      label: "Create your own ISM",
    },
    {
      type: "category",
      label: "Developer Tips",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/developer-tips/unit-testing",
          label: "Unit Testing",
        },
        {
          type: "category",
          label: "Explorer Debugging",
          link: {
            type: 'doc',
            id: 'guides/developer-tips/explorer-debugging',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "guides/developer-tips/configuring-pi-chains",
              label: "Configuring PI Chains",
            },
            {
              type: "doc",
              id: "guides/developer-tips/rest-api",
              label: "REST API",
            },
            {
              type: "doc",
              id: "guides/developer-tips/graphql-api",
              label: "GraphQL API",
            },
          ],
        },
        {
          type: 'doc',
          id: 'guides/latencies',
          label: 'Latencies',
        },
        {
          type: 'doc',
          id: 'guides/token-faucets',
          label: 'Token Faucets',
        },
      ],
    },
    {
      type: "category",
      label: "Ecosystems",
      link: {
        type: "generated-index",
        description:
          "Hyperlane can be deployed to virtually any chain, with implementations for major ecosystems and execution environments live.",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/ecosystems/celestia",
          label: "Celestia",
        },
        {
          type: "doc",
          id: "guides/ecosystems/cosmos",
          label: "Cosmos",
        },
        {
          type: "doc",
          id: "guides/ecosystems/evm",
          label: "EVM",
        },
        {
          type: "doc",
          id: "guides/ecosystems/solana",
          label: "Solana",
        },
        {
          type: "doc",
          id: "guides/ecosystems/move",
          label: "Move",
        },
        {
          type: "doc",
          id: "guides/ecosystems/fuel",
          label: "Fuel",
        },
      ],
    },
  ],

  operateSidebar: [
    {
      type: "category",
      label: "Run Validators",
      link: {
        type: 'doc',
        id: 'operate/validators/run-validators',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/validators/validator-aws",
          label: "AWS Production Setup",
        },
        {
          type: "doc",
          id: "operate/validators/monitoring-alerting",
          label: "Monitoring & Alerting",
        },
      ],
    },
    {
      type: "category",
      label: "Run Relayer",
      link: {
        type: 'doc',
        id: 'operate/relayer/run-relayer',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/relayer/message-filtering",
          label: "Message Filtering",
        },
      ],
    },
    {
      type: "doc",
      id: "operate/set-up-agent-keys",
      label: "Agent Keys",
    },
    {
      type: "category",
      label: "Agent Config",
      link: {
        type: 'doc',
        id: 'operate/agent-config',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/config-reference",
          label: "Config Reference",
        },
      ]
    },
    {
      type: "doc",
      id: "operate/run-docker-compose",
      label: "Run Docker Compose",
    },
  ],
};

module.exports = sidebars;
