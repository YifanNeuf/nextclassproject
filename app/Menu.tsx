'use client';
import { AppBar, Button, Toolbar } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <AppBar position="static">
      <Toolbar>
        <h2 style={{ margin: "20px" }}>輔仁大學體育器材室管理系統</h2>
        <Button color="inherit" variant={pathname === "/" ? "outlined" : "text"} onClick={() => router.push("/")}>主頁面</Button>
        <Button color="inherit" variant={pathname === "/management" ? "outlined" : "text"} onClick={() => router.push("/management")}>器材管理</Button>
        <Button color="inherit" variant={pathname === "/schedule" ? "outlined" : "text"} onClick={() => router.push("/schedule")}>時段管理</Button>
        <Button color="inherit" variant={pathname === "/history" ? "outlined" : "text"} onClick={() => router.push("/history")}>租借紀錄</Button>
        <Button color="inherit" variant={pathname === "/report" ? "outlined" : "text"} onClick={() => router.push("/report")}>統計報表</Button>
        <Button color="inherit" variant={pathname === "/repairment" ? "outlined" : "text"} onClick={() => router.push("/repairment")}>器材報修</Button>
        <Button color="inherit" variant={pathname === "/account" ? "outlined" : "text"} onClick={() => router.push("/account")}>帳號管理</Button>
      </Toolbar>
    </AppBar>
  );
}