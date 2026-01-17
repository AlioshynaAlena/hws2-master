import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = 10 // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
      onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
      onChange(1, +event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#CCCCCC',
                    fontSize: '14px',
                    minWidth: '24px',
                    height: '24px',
                    margin: '0 4px',
                  },
                  '& .MuiPaginationItem-page.Mui-selected': {
                    backgroundColor: '#0066CC',
                    color: 'white',
                    fontWeight: '500',
                  },
                  '& .MuiPaginationItem-page:hover': {
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                  },
                  '& .MuiPaginationItem-page.Mui-selected:hover': {
                    backgroundColor: '#0052a3',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#CCCCCC',
                  },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
