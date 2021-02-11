USE [PracticeTask]
GO

/****** Object:  Table [dbo].[PracticeTask]    Script Date: 10-02-2021 14:10:59 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PracticeTask](
	[Id] [nchar](10) NULL,
	[Name] [char](10) NULL,
	[Date] [ntext] NULL,
	[Reminder] [bit] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


