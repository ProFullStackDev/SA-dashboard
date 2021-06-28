/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * This file contains the configuration for each metric we want to show
 * {
 *    id:       field
 *    label:    name to show
 *    type:     chart type (bar | range | line-chart)
 *    min:      minimun for type range
 *    max:      maximun for type range, bar
 *    format:   value format (number | percent | currency)
 *    desc:     description to show with tooltip
 *    options:  cutomization for type range { minLabel, maxLabel, minColor, maxColor }
 * }
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
export default [
  {
    title: 'Demographic Summary',
    content: [
      {
        id: 'pop_proj',
        label: 'Projected Population',
        type: 'line-chart'
      },
      {
        id: 'persons_num',
        label: 'Population',
        format: 'number'
      },
      {
        id: 'popfraction',
        label: 'Fraction of South Australia Population Living in this Region', // too long
        format: 'percent_normalized', // 0.42 -> 42%
      },
      {
        id: 'median_persons_age',
        label: 'Median Age of Residents',
        format: 'number',
      },
      {
        id: 'males_num',
        label: 'Male Residents',
        format: 'number',
      },
      {
        id: 'median_male_age',
        label: 'Median Age of Male Residents',
        format: 'number',
      },
      {
        id: 'females_num',
        label: 'Female Residents',
        format: 'number',
      },
      {
        id: 'median_female_age',
        label: 'Median Age of Female Residents',
        format: 'number',
      },
      {
        id: 'percentage_person_aged_0_14',
        label: 'Residents Aged 0-14',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'percentage_person_aged_15_64',
        label: 'Residents Aged 15-64',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'percentage_person_aged_65_plus',
        label: 'Residents Aged 65+',
        format: 'percent',
        type: 'bar',
      },
    ]
  },
  {
    title: 'Economic Summary',
    content: [
      {
        id: 'earners_persons',
        label: 'Number of Wage Earners',
        format: 'number',
      },
      {
        id: 'median_age_of_earners_years',
        label: 'Median Age of Wage Earners',
        format: 'number',
      },
      {
        id: 'median_aud',
        label: 'Median Income',
        format: 'currency',
      },
      {
        id: 'mean_aud',
        label: 'Mean Income',
        format: 'currency',
      },
      {
        id: 'income_aud',
        label: 'Accumulate Income', // ?
        format: 'currency',
      },
      {
        id: 'quartile',
        label: 'Quartile of the Median Income of this SA2 Among all SA2s in South Australia', // too long and shouldn't use the "SA2"
        type: 'bar',
        max: 4,
        // format: 'range', // One of 1, 2, 3, or 4
      },
      {
        id: 'inequality', // show this or no?
        label: 'Inequality (lower is better)',
        format: 'percent',
        type: 'bar',
        max: 100,
      },
      {
        id: 'occup_diversity',
        label: 'Diversity of Occupation Types',
        format: 'number',
      },
      {
        id: 'gini_coefficient_no',
        label: 'Income Gini Coefficient',
        // format: 'range', // from 0 to 1
        type: 'bar',
        max: 1.0,
      },
      {
        id: 'highest_quartile_pc',
        label: 'Earners Falling into Highest Income Quartile',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'third_quartile_pc',
        label: 'Earners Falling into Third Income Quartile',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'second_quartile_pc',
        label: 'Earners Falling into Second Income Quartile',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'lowest_quartile_pc',
        label: 'Earners Falling into Lowest Income Quartile',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'income_share_top_1pc',
        label: 'Income Share of Top 1% Income Group',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'income_share_top_5pc',
        label: 'Income Share of Top 5% Income Group',
        format: 'percent',
        type: 'bar',
      },
      {
        id: 'income_share_top_10pc',
        label: 'Income Share of Top 10% Income Group',
        format: 'percent',
        type: 'bar',
      },
    ]
  },
  {
    title: 'Growth Summary',
    content: [
      {
        id: 'income_diversity',
        label: 'GDP Growth Potential',
        desc: `Economic growth is an increase in the production of economic goods and services, compared from one period of time to another. Traditionally, aggregate economic growth is measured in terms of gross national product (GNP) or gross domestic product (GDP), although alternative metrics are sometimes used.`,
        format: 'number',
        type: 'range',
        min: 0,
        max: 1.2,
      },
      {
        id: 'bridge_diversity',
        label: 'Social Bridge Diversity', // not Job Resilience?
        format: 'number',
        type: 'range',
        max: 5.0,
        options: {
          minLabel: 'MIN',
          maxLabel: 'MAX',
          minColor: 'rgb(89,207,245)',
          maxColor: 'rgb(45,156,219)',
        },
      },
      // {
      //   id: 'bridge_diversity', label: 'Job Resilience', format: 'number',
      //   desc: 'The ability to adjust to career change as it happens and,by extension, adapt to what the market demands.'
      // },
      {
        id: 'bsns_entries',
        label: 'Number of Businesses Opened', // when?
        format: 'number',
      },
      {
        id: 'bsns_exits',
        label: 'Number of Businesses Closed', // when?
        format: 'number',
      },
      {
        id: 'bsns_growth_rate',
        label: 'Business Growth Rate',
        format: 'percent_normalized',
      },
      // {
      //   id: 'bsns_growth_rate', label: 'Business Growth Index', format: 'number',
      //   desc: 'The growth rate is the measure of a company’s increase in revenue and potential to expand over a set period.'
      // },
    ]
  },
  {
    title: 'Residential Housing Summary',
    content: [
      {
        id: 'housing_median_1br_apt',
        label: 'Median 1BR Apt Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_2br_apt',
        label: 'Median 2BR Apt Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_3br_apt',
        label: 'Median 3BR Apt Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_4above_apt',
        label: 'Median 4BR+ Apt Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_1br_h',
        label: 'Median 1BR House Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_2br_h',
        label: 'Median 2BR House Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_3br_h',
        label: 'Median 3BR House Weekly',
        format: 'currency',
      },
      {
        id: 'housing_median_4above_h',
        label: 'Median 4BR+ House Weekly',
        format: 'currency',
      },
    ]
  }
];
