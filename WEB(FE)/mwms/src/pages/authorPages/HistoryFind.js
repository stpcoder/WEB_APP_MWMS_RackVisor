import React from 'react'
import AuthorHeader from '../../components/AuthorHeader'
import Sidebar from '../../components/Sidebar'
import HistoryList from '../../utils/history/historyList'
import SearchInput from '../../utils/search/SearchInput'

function HistoryFind() {
  return (
    <div class="bg-[#202020]">
      <AuthorHeader/>
      <div class="flex">
        <Sidebar/>
        <div class="flex-1 bg-[#202020]">
          <div class="flex grid grid-cols-2 divide-x-2 gap-4 px-4 py-3 border-gray-200 bg-gray">
            <div class="flex-1 bg-[#323232] rounded-2xl">
              <SearchInput/>
              <HistoryList/>
            </div>
            <div class="flex-auto text-white pl-3 pt-3">
              <div class="rounded-2xl bg-[#323232] ">
                <div class="flex-auto">물자 추가 / 제거 / 위치 변경</div>
                <div>물품명 :  </div>
                <div>변동 수량 : </div>
                <div>변동 위치 : </div>
                <div>담당자 : </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default HistoryFind