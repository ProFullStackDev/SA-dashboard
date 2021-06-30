export const HIDE_SIDEBAR_DIALOG = "HIDE_SIDEBAR_DIALOG";
export const SET_ACTIVE_MAP_LAYER = "SET_ACTIVE_MAP_LAYER";
export const SET_FLOW_DIRECTION = "SET_FLOW_DIRECTION";
export const SET_SEARCH_BAR_INFO = "SET_SEARCH_BAR_INFO";
export const SET_SIDEBAR = "SET_SIDEBAR";
export const CLICKEDSA2 = "CLICKEDSA2";
export const CLICKEDFEATURES = "CLICKEDFEATURES";
export const GEOCODER = "GEOCODER";
export const SET_SELECTED_FEATURE = "SET_SELECTED_FEATURE";
export const SET_HIGHLIGHTED_FEATURE = "SET_HIGHLIGHTED_FEATURE";
export const ADD_COMPARISON_FEATURE = "ADD_COMPARISON_FEATURE";
export const REMOVE_COMPARISON_FEATURE = "REMOVE_COMPARISON_FEATURE";
export const UPDATE_COLLAPSIBLE_STATE = "UPDATE_COLLAPSIBLE_STATE";
export const SET_HAMBURGER_MENU_OPEN = "SET_HAMBURGER_MENU_OPEN";
export const SET_COMPARISON_TYPE = "SET_COMPARISON_TYPE";
export const SET_SAVED_MAP_POSITION = "SET_SAVED_MAP_POSITION";

export const MAP_TYPE = {
  GROWTH: "growth",
  TRANSACTIONS: "transactions",
  SEGREGATION: "segregation",
  BUSINESSES: "businesses"
};

export const COMPARISON_TYPE = {
  TABLE: "table",
  GRID: "grid",
};

export const FLOW_IN = "inflow";
export const FLOW_OUT = "outflow";
export const FLOW_BI = "bidirectional";
export const RECOMMENDATION_DUMMY_DATA = [
  {
    title: "Your Business",
    description: "We will ask you a few questions about your business needs, and then provide location recommendations based on your answers.",
    questions: [
      {
        type: "typeahead_select",
        question: "What kind of business are you looking to open?",
        key: "anzsic_code",
        answers: [], // Populated from anzsic_code.json in RecommendationTool
      },
    ]
  },
  {
    title: "Your Customers",
    description: "",
    questions: [
      {
        type:"slider_range",
        question: "What is the income range of the customers you would like to reach?",
        key: "customer_income",
        answers: {
          0: "$0",
          20: "$25,000",
          40: "$50,000",
          60: "$75,000",
          80: "$100,000",
          100: "$250,000+"
        }
      },
      {
        type: "checkbox",
        question: "What characteristics describe your typical customers?",
        hint: "Select all that apply",
        key: "characteristics",
        answers: ["Tourists", "Locals", "One-off Purchases", "Repeat Customers", "Culturally Diverse"]
      },
      {
        type: "checkbox",
        question: "What's their typical household income?",
        hint: "Select all that apply",
        key: "household_income",
        answers: ["Low", "Medium", "High", "Not Sure"]
      }
    ]
  },
  {
    title: "Premises",
    description: "",
    questions: [
      {
        type: "multiple_choice",
        question: "What about commercial premises leasing expenses?",
        key: "commercial_premises",
        answers: ["I have a limited budget", "Willing to look at locations that can justify the rent with profitable business returns.", "Leasing a premises is not a concern for me."]
      }
    ]
  }
]