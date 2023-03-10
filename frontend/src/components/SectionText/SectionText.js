import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import PropTypes from 'prop-types'

import FieldNumber from 'components/FieldNumber'
import ExpandableContainer from 'components/ExpandableContainer'
import { LayoutMetricType } from 'utils/propTypes'

const SectionText = ({ layout, data }) => {
  const xAxisKey = layout.x?.key
  const yAxisKey = layout.y?.key
  const defaultContainerHeight = 300
  const dataExists = data => {
    if (data && data.length) {
      return true
    } else {
      return false
    }
  }

  if (layout.format === 'number') {
    if (data) {
      return <FieldNumber value={data} numberFormat={layout.numberFormat} />
    } else if (data === undefined) {
      return <Typography variant="fieldValue">No data</Typography>
    } else {
      return <Skeleton variant="text" />
    }
  }

  if (data === null) {
    return <Skeleton variant="rectangular" height={defaultContainerHeight} sx={{ borderRadius: 1 }} />
  }

  if (xAxisKey && yAxisKey && dataExists(data)) {
    return (
      <Box>
        <ExpandableContainer data={data} filters={layout.filters}>
          {items =>
            items.map((item, index) => (
              <Box key={index}>
                <Typography variant="fieldLabel">{item[xAxisKey]}</Typography>
                {layout.y?.format === 'number' &&
                  (item[yAxisKey] !== null ? (
                    <FieldNumber value={item[yAxisKey]} numberFormat={layout.y.numberFormat} gutterBottom />
                  ) : (
                    <Typography variant="fieldValue" gutterBottom>
                      No data
                    </Typography>
                  ))}
              </Box>
            ))
          }
        </ExpandableContainer>
      </Box>
    )
  } else if (data === undefined || data.length === 0) {
    return <Typography variant="fieldValue">No data</Typography>
  }
}

SectionText.propTypes = {
  layout: LayoutMetricType,
  data: PropTypes.any,
}

export default SectionText
